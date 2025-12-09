// Comprueba que el usuario ha iniciado sesión
function isLoggedIn(req, res, next) {
  if (req.session && req.session.user) {
    return next();
  }
  // Si no está logueado, lo mandamos a login
  return res.redirect('/login');
}

// Comprueba que el usuario es ADMIN
function isAdmin(req, res, next) {
  if (
    req.session &&
    req.session.user &&
    req.session.user.username === 'admin'   // nuestro admin
  ) {
    return next();
  }

  // No es admin → 403 Prohibido
  return res.status(403).send('No tienes permisos de administrador');
}

module.exports = { isLoggedIn, isAdmin };
