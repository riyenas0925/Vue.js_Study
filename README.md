# Vue.js_Study

## 1.인스턴스(Instance)
```html
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
```

## 2.컴포넌트(Component)
1. 컴포넌트 등록
```html
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
```
>
2. 컴포넌트 통신 부모 -> 자식
```html
<body>
    <div id="app">
        <child-component v-bind:propsdata="message"></child-component>
        <!--v-bind:props 속성 이름="상위 컴포넌트의 데이터 속성"-->
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue.js"></script>

    <script>
        Vue.component('child-component',{
        //하위 컴포넌트 등록    
            props:['propsdata'],
            //props의 속성으로 propsdata 정의
            template:'<p>{{ propsdata }}</p>',
            //상위 컴포넌트인 message 속성값인 텍스트를 하위 컴포넌트인 propsdata로 전달
        });

        new Vue({
            el:'#app',
            data:{
                message:'Hello Vue! passed from Passed Component'
                //상위 컴포넌트 message 속성값
            }
        })
    </script>
</body>
```
>
3. 컴포넌트 통신 자식 -> 부모
```html
<body>
    <div id="app">
        <child-component v-on:show-log="printText"></child-component>
        <!--v-bind:props 속성 이름="상위 컴포넌트의 데이터 속성"-->
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue.js"></script>

    <script>
        Vue.component('child-component',{
            props:['propsdata'],
            template:'<button v-on:click="showLog">show</button>',
            methods:{
                showLog: function(){
                    this.$emit('show-log');
                }
            }
        });

        var app = new Vue({
            el:'#app',

            data:{
                message:'Hello Vue! passed form Parent Component'
            },

            methods:{
                printText:function(){
                    console.log("recived an event");
                }
            },
        });
    </script>
</body>
```

## 3.라우터(Router)

## 4.HTTP 통신

## 5.템플릿
