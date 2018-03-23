function validateUsr(username) {
    return(/^([a-z]|[0-9]|[_]){4,12}$/.test(username))
  }