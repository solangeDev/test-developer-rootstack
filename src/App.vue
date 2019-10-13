<template>
    <div class="main-container">
        <nav class="card-container navbar navbar-inverse navbar-fixed-top">
            <div class="container">
                <div id="navbar" class="card navbar-collapse collapse">
                    <ul class="list-container nav navbar-nav">
                        <router-link tag="li" to="/exercise-1" exact>
                            <a>Fetch & order</a>
                        </router-link>  
                        <router-link tag="li" to="/exercise-2" exact>
                            <a>Fetch & find</a>
                        </router-link>  
                        <router-link tag="li" to="/exercise-3" exact>
                            <a>Fetch & count</a>
                        </router-link>   
                        <router-link tag="li" to="/exercise-4" exact>
                            <a>Fastest ship</a>
                        </router-link>  
                        <router-link tag="li" to="/exercise-5" exact>
                            <a>Planet by terrain</a>
                        </router-link>   
                                            
                    </ul>
                </div>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
    body {
        padding-top: 50px;
    }
</style>