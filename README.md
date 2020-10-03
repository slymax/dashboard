<p align="center">
    <img src="https://raw.githubusercontent.com/slymax/dashboard/master/_includes/logo.svg" />
</p>

This is a user account management dashboard for [userbase](https://userbase.com) that compiles to a single html file. It allows users to create an account, change account details, delete their account and it also handles user login and logout.

**Demo:** [https://slymax.com/dashboard](https://slymax.com/dashboard)

### Configuration

```
---
APP_ID: ""
REDIRECT_URL: ""
---
```

1. set your userbase `APP_ID` and an optional `REDIRECT_URL` at the top of the `index.html` file. After successfully logging in or creating an account, users will be redirected to that url.
2. run `jekyll build` to build the dashboard.
