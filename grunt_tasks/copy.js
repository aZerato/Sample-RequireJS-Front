module.exports = {
    prod: {
        files: [
            // bower vendors
			{src: '<%= configs.bower %>/requirejs/require.js', dest: '<%= configs.vendors %>/require.js'},
            {src: '<%= configs.bower %>/jquery/dist/jquery.min.js', dest: '<%= configs.vendors %>/jquery.js'},
            {src: '<%= configs.bower %>/toastr/toastr.min.js', dest: '<%= configs.vendors %>/toastr.js'},

            // bower assets
            {src: '<%= configs.bower %>/toastr/toastr.min.css', dest: '<%= configs.styles %>/toastr.min.css'},
        ]
    },
    debug: {
        files: [
            // bower vendors
			{src: '<%= configs.bower %>/requirejs/require.js', dest: '<%= configs.vendors %>/require.js'},
            {src: '<%= configs.bower %>/jquery/dist/jquery.js', dest: '<%= configs.vendors %>/jquery.js'},
            {src: '<%= configs.bower %>/toastr/toastr.js', dest: '<%= configs.vendors %>/toastr.js'},

            // bower assets
            {src: '<%= configs.bower %>/toastr/toastr.css', dest: '<%= configs.styles %>/toastr.css'},
        ]
    }
};