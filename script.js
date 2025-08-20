// سنة ديناميكية
document.getElementById('year').textContent = new Date().getFullYear();

// قائمة الجوال
const btn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
btn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
    });

    // رسالة نجاح/فشل للنموذج (Formspree)
    const form = document.getElementById('contactForm');
    const msg = document.getElementById('formMsg');
    if(form){
      form.addEventListener('submit', async (e) => {
          e.preventDefault();
              msg.textContent = 'جارٍ الإرسال...';
                  try{
                        const res = await fetch(form.action, {
                                method: 'POST',
                                        body: new FormData(form),
                                                headers: { 'Accept': 'application/json' }
                                                      });
                                                            if(res.ok){
                                                                    msg.textContent = 'تم الإرسال بنجاح! سنعود إليك قريبًا.';
                                                                            form.reset();
                                                                                  } else {
                                                                                          msg.textContent = 'تعذر الإرسال. تأكد من إعداد Formspree (معرّف النموذج) وجرب مجددًا.';
                                                                                                }
                                                                                                    }catch(err){
                                                                                                          msg.textContent = 'حدث خطأ بالشبكة. حاول لاحقًا.';
                                                                                                              }
                                                                                                                });
                                                                                                                }