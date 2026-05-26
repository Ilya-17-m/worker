// ── JustValidate ─────────────────────────────────────────────────
const validator = new window.JustValidate('#contact-form', {
  validateBeforeSubmitting: true,
});

validator
  .addField('#firstName', [
    { rule: 'required', errorMessage: 'Введите имя' },
    { rule: 'minLength', value: 2, errorMessage: 'Минимум 2 символа' },
  ])
  .addField('#lastName', [
    { rule: 'required', errorMessage: 'Введите фамилию' },
    { rule: 'minLength', value: 2, errorMessage: 'Минимум 2 символа' },
  ])
  .addField('#email', [
    { rule: 'required', errorMessage: 'Введите email' },
    { rule: 'email', errorMessage: 'Некорректный email' },
  ])
  .addField('#phone', [
    { rule: 'required', errorMessage: 'Введите номер телефона' },
    { rule: 'customRegexp', value: /^[\+]?[\d\s\-\(\)]{7,20}$/, errorMessage: 'Некорректный номер' },
  ])
  .addField('#message', [
    { rule: 'required', errorMessage: 'Введите тему' },
    { rule: 'minLength', value: 5, errorMessage: 'Минимум 5 символов' },
  ])
  .onSuccess(async (event) => {
    event.preventDefault();
    await addWork();
  })
  .onFail(() => {
    showToast('error', '✕ Проверьте форму', 'Заполните все поля корректно.');
  });


// ── API запрос ────────────────────────────────────────────────────
async function addWork() {
  const data = {
    first_name: document.querySelector('#firstName').value,
    last_name:  document.querySelector('#lastName').value,
    email:      document.querySelector('#email').value,
    tel_number: document.querySelector('#phone').value,
    topic:      document.querySelector('#message').value,
  };

  try {
    const response = await fetch('http://127.0.0.1:8000/api/work/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Статус: ${response.status}`);
    }

    // Успех
    showToast('success', '✓ Отправлено!', 'Ваше сообщение успешно доставлено.');
    document.querySelector('#contact-form').reset();
    document.querySelector('#modal').style.display = 'none';

    return response.json();

  } catch (err) {
    showToast('error', '✕ Ошибка', 'Не удалось отправить. Попробуйте ещё раз.');
    console.error('Ошибка запроса:', err);
  }
}


// ── Toast ─────────────────────────────────────────────────────────
function showToast(type, title, message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    Object.assign(container.style, {
      position: 'fixed', top: '24px', right: '24px',
      display: 'flex', flexDirection: 'column', gap: '12px',
      zIndex: '9999', pointerEvents: 'none',
    });
    document.body.appendChild(container);
  }

  const isSuccess = type === 'success';
  const toast = document.createElement('div');

  Object.assign(toast.style, {
    display: 'flex', alignItems: 'flex-start', gap: '12px',
    padding: '14px 18px', borderRadius: '12px',
    minWidth: '280px', maxWidth: '360px',
    pointerEvents: 'auto',
    backdropFilter: 'blur(10px)',
    background: isSuccess ? 'rgba(220,252,231,0.88)' : 'rgba(254,226,226,0.88)',
    border: isSuccess ? '1.5px solid rgba(34,197,94,0.4)' : '1.5px solid rgba(239,68,68,0.4)',
    boxShadow: isSuccess ? '0 8px 24px rgba(34,197,94,0.15)' : '0 8px 24px rgba(239,68,68,0.2)',
    transform: 'translateX(60px)', opacity: '0',
    transition: 'transform 0.35s cubic-bezier(.22,1,.36,1), opacity 0.35s ease',
    cursor: 'pointer',
  });

  toast.innerHTML = `
    <span style="
      flex-shrink:0; width:26px; height:26px; border-radius:50%;
      display:flex; align-items:center; justify-content:center;
      font-weight:700; font-size:14px;
      background:${isSuccess ? 'rgba(34,197,94,0.15)' : 'rgba(239,68,68,0.15)'};
      color:${isSuccess ? '#15803d' : '#dc2626'};
    ">${isSuccess ? '✓' : '✕'}</span>
    <div>
      <div style="font-weight:700; font-size:14px; color:${isSuccess ? '#14532d' : '#7f1d1d'}; margin-bottom:2px;">
        ${title}
      </div>
      <div style="font-size:13px; color:${isSuccess ? '#166534' : '#991b1b'}; line-height:1.4;">
        ${message}
      </div>
    </div>
  `;

  container.appendChild(toast);
  requestAnimationFrame(() => {
    toast.style.transform = 'translateX(0)';
    toast.style.opacity = '1';
  });

  const dismiss = () => {
    toast.style.transform = 'translateX(60px)';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 400);
  };
  toast.addEventListener('click', dismiss);
  setTimeout(dismiss, 3500);
}