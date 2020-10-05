(async () => {
    const showMessage = message => {
        document.getElementById("message").textContent = message.replace("Username", "E-Mail");
        document.getElementById("message").style.display = "block";
    };
    const session = await userbase.init({ appId: "{{ page.APP_ID }}" });
    if (session.user) {
        document.body.dataset.status = "signed-in";
        document.getElementById("email").value = session.user.email;
        document.getElementById("update").onclick = async () => {
            try {
                await userbase.updateUser({
                    username: document.getElementById("email").value,
                    currentPassword: document.getElementById("old_password").value,
                    newPassword: document.getElementById("new_password").value,
                    email: document.getElementById("email").value
                });
                showMessage("Your changes have been saved.");
            } catch (error) {
                showMessage(error.message);
            }
        };
        document.getElementById("delete").onclick = async () => {
            try {
                const sure = confirm("Are you sure you want to completely delete your account?")
                if (sure) {
                    await userbase.deleteUser();
                    location.reload();
                }
            } catch (error) {
                showMessage(error.message);
            }
        };
        document.getElementById("logout").onclick = async () => {
            try {
                await userbase.signOut();
                location.reload();
            } catch (error) {
                showMessage(error.message);
            }
        };
    } else {
        document.body.dataset.status = "signed-out";
        document.getElementById("create").onclick = async () => {
            try {
                await userbase.signUp({
                    email: document.getElementById("email").value,
                    username: document.getElementById("email").value,
                    password: document.getElementById("password").value,
                    sessionLength: 8760,
                    rememberMe: "local"
                });
                location =  "{{ page.REDIRECT_URL }}";
            } catch (error) {
                showMessage(error.message);
            }
        };
        document.getElementById("login").onclick = async () => {
            try {
                await userbase.signIn({
                    username: document.getElementById("email").value,
                    password: document.getElementById("password").value,
                    sessionLength: 8760,
                    rememberMe: "local"
                });
                location =  "{{ page.REDIRECT_URL }}";
            } catch (error) {
                showMessage(error.message);
            }
        };
    }
})();
