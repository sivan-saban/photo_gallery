class AppConfig {

    public catByIdUrl = "http://localhost:8001/categories";
    public PhotoByCategoryUrl = "http://localhost:8001/images";
}

const appConfig = new AppConfig(); // Singleton

export default appConfig;
