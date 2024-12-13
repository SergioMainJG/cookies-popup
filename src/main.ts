const dialog: HTMLDialogElement = document.querySelector('#dialog')!;

const areCookiesAvailable = localStorage.getItem('cookies-sereldev');

if (!Boolean(areCookiesAvailable)) {
  document.addEventListener('DOMContentLoaded', () => {

    dialog.classList.remove('hidden');

    const close: HTMLButtonElement = document.querySelector('#close')!;
    const accept: HTMLButtonElement = document.querySelector('#accept')!;

    close.addEventListener('click', () => {
      dialog.classList.add('hidden');
      console.log('Close')
    });
    accept.addEventListener('click', () => {
      document.cookie = 'cookies-sereldev=true';
      localStorage.setItem('cookies-sereldev', document.cookie);
      dialog.classList.add('hidden');
      console.log('Accept')
    });
  })
}
