# Vue.js_Study

## 1.인스턴스(Instance)
    <body>
        <div id="app">
            {{message}}
        </div>

        <script src="https://cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue.js"></script>
        <script>
            new Vue({
                el:'#app',
                data:{
                    message:'Hello Vue.js!'
                }
            });
        </script>
    </body>

## 2.컴포넌트(Component)

    <body>
        <div id="app">
            <h3>첫 번째 인스턴스 영역</h3>
            <my-global-component></my-global-component>
            <my-local-component></my-local-component>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue.js"></script>

        <script>
            Vue.component('my-global-component',{
                template: '<div>전역 컴포넌트가 등록되었습니다!</div>'
            });

            var cmp ={
                template: '<div>지역 컴포넌트가 등록되었습니다!</div>'
            };

            new Vue({
                el: '#app',

                components:{
                    'my-local-component': cmp
                }
            });
        </script>
    </body>

## 3.Router