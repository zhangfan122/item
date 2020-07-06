require.config({
    paths: {
        jquery: './jquery.min',
        reindex: './lib/reindex'
    }
});

require(['reindex'], function(reindex) {
    reindex.render();
});