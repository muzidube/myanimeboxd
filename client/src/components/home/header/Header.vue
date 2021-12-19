<template>
  <header className="h-10 bg-black-background py-0 px-1.5 z-50 relative">
    <div className="container mx-auto max-w-screen-lg h-full">
      <div className="flex justify-between h-full px-5">
        <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
          <h1 className="flex justify-center w-full">
            <router-link :to="'/'">
              <p className="font-comfortaa text-2em text-center text-white my-auto">a</p>
            </router-link>
          </h1>
        </div>
        <div className="text-gray-700 text-center flex items-center align-items">
          <!-- <div v-if="user">
                <button
                  type="button"
                  title="Sign Out"
                  className="font-bold text-sm rounded text-white w-20 h-8"
                  onClick={logout}
                >
                  Sign Out
                </button>
                <div className="flex items-center cursor-pointer text-black">
                  <router-link :to={`/p/${user.username}`} className="min-w-46px">
                    <span className="min-w-46px w-46px h-46px box-border text-white">
                      <div className="block m-0 w-full h-full">
                        <span className="w-full h-full inline-flex flex-nowrap items-center justify-center text-2em rounded-50% bg-red-tertiary">
                          {user.username.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    </span>
                  </router-link>
                </div>
              </div> -->

          <div>
            <!-- <router-link :to={ROUTES.LOGIN}> -->
            <button type="button" className="font-bold text-sm rounded text-white w-20 h-8">
              Log In
            </button>
            <!-- </router-link> -->
            <!-- <router-link :to={ROUTES.SIGN_UP}> -->
            <button type="button" className="font-bold text-sm rounded text-black w-20 h-8">
              Sign Up
            </button>
            <!-- </router-link> -->
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
