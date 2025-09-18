document.addEventListener('DOMContentLoaded',()=>{

  // Enrollment form
  const enrollForm=document.getElementById('enrollForm');
  const formMsg=document.getElementById('formMsg');
  enrollForm.addEventListener('submit',e=>{
    e.preventDefault();
    const name=document.getElementById('name').value.trim();
    const email=document.getElementById('email').value.trim();
    const program=document.getElementById('program').value;
    if(!name||!email){ formMsg.textContent="Please enter name and contact."; return; }
    formMsg.textContent=`Thank you ${name} — we will contact you about ${program} soon.`;
    enrollForm.reset();
  });
  document.getElementById('reset').addEventListener('click',()=>enrollForm.reset());

  // Quick enroll buttons
  document.querySelectorAll('.enroll').forEach(b=>{
    b.addEventListener('click',e=>{
      document.getElementById('program').value = b.dataset.course;
      document.getElementById('name').focus();
      window.scrollTo({top:document.getElementById('enrollCard').offsetTop-20, behavior:'smooth'});
    });
  });

  // Contact form
  document.getElementById('contactForm').addEventListener('submit',e=>{
    e.preventDefault();
    const n=document.getElementById('cname').value.trim();
    const m=document.getElementById('cmsg').value.trim();
    const res=document.getElementById('cmsgRes');
    if(!n||!m){ res.textContent="Please fill both fields."; return; }
    res.textContent=`Thanks ${n} — we received your message.`;
    e.target.reset();
  });
});
