let app = new Vue({

    el: "#app",

    data: {
        show: 'grid',
        apiRequest: new XMLHttpRequest(),
        cats: {}
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

                // for (let i = 0; i < this.cats.length; i++) {
                //   this.cats.data.images.original.url;
                //
                // }
                  console.log(this.cats);


            }
            else {
                this.onError()

            }

        }

    }

});
