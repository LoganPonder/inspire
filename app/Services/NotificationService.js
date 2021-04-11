export default class NotificationService {
  static toast(title = "Default Toasty", display = "success") {
    // @ts-ignore
    Swal.fire({
      title: title,
      icon: display,
      iconColor: '#fff',
      position: "center-end",
      timer: 3000,
      toast: true,
      showConfirmButton: false,
      background: 'rgba(0,0,0,0.7)',
      iconHtml:
        '<img src="https://media.giphy.com/media/PijzuUzUhm7hcWinGn/giphy.gif" style="width:50px; border-radius: 50%">',
    });
  }
}