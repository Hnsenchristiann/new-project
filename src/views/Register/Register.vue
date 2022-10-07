<template>
    <div style="height: 100vh;">
        <div class="h-100 d-flex justify-content-center align-items-center">
            <form>
                <div class="form-outline mb-4">
                    <input name="username" type="email" id="form2Example1" class="form-control" />
                    <label id="username" class="form-label" for="form2Example1">Username</label>
                </div>

                <div class="form-outline mb-4">
                    <input name="email" type="email" id="form2Example1" class="form-control" />
                    <label id="email" class="form-label" for="form2Example1">Email address</label>
                </div>

                <div class="form-outline mb-4">
                    <input name="password" type="password" id="form2Example2" class="form-control" />
                    <label id="password" class="form-label" for="form2Example2">Password</label>
                </div>

                <div class="form-outline mb-4">
                    <input name="confirm" type="confirm" id="confirm" class="form-control" />
                    <label id="confirm-password" class="form-label" for="confirm">Confirm Password</label>
                </div>

                <div class="row mb-4">
                    <div class="col d-flex justify-content-center">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                            <label id="remember" class="form-check-label" for="form2Example31"> Remember me </label>
                        </div>
                    </div>
                </div>

                <button id="register-btn" type="button" class="btn btn-primary btn-block mb-4">Register</button>

                <div id="info" class="text-center">
                    <p>Already have account? <a href="/login">Login here</a></p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RegisterPage'
}
</script>

<style scoped>

</style>