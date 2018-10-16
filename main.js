let app = new Vue({

    el: "#app",

    data: {
        show: localStorage.getItem('show'),
        apiRequest: new XMLHttpRequest(),
        cats: {},
        view: ''
        // xhr.done(function(data) { console.log("success got data", data); });

    },

    computed: {

        showGrid: function () {
            return this.show == 'grid';
        },

        showList: function () {
            return this.show == 'list';
        }

    },

    created: function () {

        // Format a url
        let url = 'http://api.giphy.com/v1/gifs/search?q=cats&api_key=3o0fsEzz2T1gTRsj9hczHWjX35yEFo3b&limit=20';

        // Fetch from the url
        this.apiRequest.onload = this.onSuccess;
        this.apiRequest.onerror = this.onError;
        this.apiRequest.open('get', url, true);
        this.apiRequest.send();

    },

    methods: {

        pickGrid: function () {
            this.pickView('grid');
        },

        pickList: function () {
            this.pickView('list');
        },

        pickView: function (style) {
            this.show = style;
        },

        onError: function () {
            console.log("oops!");
        },

        onSuccess: function () {

            if (this.apiRequest.status == "200") {

                this.cats = JSON.parse(this.apiRequest.responseText).data;




            } else {
                this.onError()

            }

        },

          saveInput: function () {

          console.log('You pushed the button!');

          let input = this.show;

            if (this.show == 'grid') {

              localStorage.setItem('show', input);
              }

            if (this.show == 'list') {

              localStorage.setItem('show', input);
            }

        // // Get the value from the input field
        // let input = color.value;
        //
        // // Save the value in localstorage
        // localStorage.setItem("favorite_color", input);
        //
        // // Update the message to show we've saved the input
        // message.innerHTML = "I just saved <strong>" + input + "</strong> as your favorite color.";

      }

    }

});
