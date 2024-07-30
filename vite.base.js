export default () => ({
    build: {
        outDir: 'build',
        rollupOptions: {
            output: {
                intro: 'window.regeneratorRuntime = undefined;', // fixes: https://github.com/mui/mui-x/issues/9572, https://github.com/exceljs/exceljs/issues/713, https://github.com/facebook/regenerator/issues/378#issuecomment-874296918
                manualChunks: (id) => {
                    if (id.includes('node_modules')) {
                        if (id.includes('@popperjs')) {
                            return 'vendor_popperjs';
                        }
                        if (id.includes('slick-carousel')) {
                            return 'vendor_slick';
                        }
                        if (id.includes('date-fns')) {
                            return 'vendor_date_fns';
                        }
                        if (id.includes('lodash')) {
                            return 'vendor_lodash';
                        }
                        if (id.includes('immutable')) {
                            return 'vendor_immutable';
                        }
                        if (id.includes('yup')) {
                            return 'vendor_yup';
                        }
                        if (id.includes('dompurify')) {
                            return 'vendor_dompurify';
                        }
                        if (id.includes('keycloak')) {
                            return 'vendor_keycloak';
                        }
                        if (id.includes('localforage')) {
                            return 'vendor_localforage';
                        }
                        if (id.includes('downshift')) {
                            return 'vendor_downshift';
                        }
                        if (id.includes('/leaflet')) {
                            return 'vendor_leaflet';
                        }
                        if (id.includes('@elastic')) {
                            return 'vendor_elastic';
                        }
                        if (id.includes('@mui/x-data-grid')) {
                            return 'vendor_mui_data_grid';
                        }
                        if (id.includes('swagger-ui')) {
                            return 'vendor_swagger_ui';
                        }
                        if (id.includes('exceljs')) {
                            return 'vendor_exceljs';
                        }
                        return 'vendor';
                    }
                    return null;
                },
            },
        },
    },
});
