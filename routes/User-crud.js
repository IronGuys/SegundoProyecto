// CRUD -> CREATE FORM 
router.get('/signup', (req, res) => {
    res.render('signup');
});

// CRUD -> CREATE USER IN DATABASE 
router.post('/signup', (req, res) => {
    const {
        name,
        username,
        email,
        password,
        paymentMethod
    } 
    newUser.save(err => {
        if (err) {
            return next(err)
        }
        res.redirect('/');
    })
});
// DELETE USER FROM DB
router.get('/profile/delete/:id', (req, res) => {
    const id = req.params.id;

    User.findByIdAndRemove(id, (err, user) => {
        if (err) {
            return next(err);
        }
        return res.redirect('/');
    });
});
/* CRUD -> UPDATE DATABASE */
router.post('/detail/:id/', (req, res) => {
    const userId = req.params.id;
    const {name,paymentMethod,username} = req.body;
    const updates = {name,paymentMethod,username};

    User.findByIdAndUpdate(userId, updates, (err, product) => {
        if (err) {
            return next(err);
        }
        return res.redirect(`/user/profile/${userId}`);
    });
})




module.exports = router;