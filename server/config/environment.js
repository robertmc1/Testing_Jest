const environments = {
    development: "development",
    production: "production",
    preproduction: "preproduction",
    test: "test"
};

const ENV = environments[process.env.NODE_ENV] || environments.development;

const config = {
    [environments.development]: {
        MongoDB: {
            URI: "localhost:27017/clase_dev",
            host: "localhost",
            port: 27017,
            db: "clase_dev"
        },
        PORT: 8080
    },
    [environments.production]: {
        MongoDB: {
            URI: "localhost:27017/clase_prod",
            host: "localhost",
            port: 27017,
            db: "clase_prod"
        },
        PORT: 80
    },
    [environments.preproduction]: {

    },
    [environments.test]: {
        MongoDB: {
            URI: "localhost:27017/clase_test",
            host: "localhost",
            port: 27017,
            db: "clase_test"
        },
        PORT: 8080
    }
}

process.env = {
    ...process.env,
    ...config[ENV]
};