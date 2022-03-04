function authErrorMessage(message) {
  console.log(message.code);
  switch (message.code) {
    case 'auth/email-already-exists':
      return 'E-posta zaten mevcut bir kullanıcı tarafından kullanılıyor. ';
    case 'auth/invalid-email':
      return 'Geçersiz E-posta adresi. ';

    case 'auth/invalid-password':
      return 'Password en az 6 karakterden oluşan dize olmalıdır';

    case 'auth/user-not-found':
      return 'Kullanıcı bulunamadı';

    case 'auth/wrong-password':
      return 'Kullanıcı adı veya şifre yanlış';

    default:
      return 'Hata';
  }
}
export default authErrorMessage;
