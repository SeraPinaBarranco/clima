export interface ClimaInterface {
    cod:     string;
    message: number;
    cnt:     number;
    list:    List[];
    city:    City;
}

interface City {
    id:         number;
    name:       string;
    coord:      Coord;
    country:    string;
    population: number;
    timezone:   number;
    sunrise:    number;
    sunset:     number;
}

interface Coord {
    lat: number;
    lon: number;
}

interface List {
    dt:         number;
    main:       MainClass;
    weather:    Weather[];
    clouds:     Clouds;
    wind:       Wind;
    visibility: number;
    pop:        number;
    sys:        Sys;
    dt_txt:     Date;
}

interface Clouds {
    all: number;
}

interface MainClass {
    temp:       number;
    feels_like: number;
    temp_min:   number;
    temp_max:   number;
    pressure:   number;
    sea_level:  number;
    grnd_level: number;
    humidity:   number;
    temp_kf:    number;
}

interface Sys {
    pod: Pod;
}

enum Pod {
    D = "d",
    N = "n",
}

interface Weather {
    id:          number;
    main:        MainEnum;
    description: Description;
    icon:        Icon;
}

enum Description {
    AlgoDeNubes = "algo de nubes",
    CieloClaro = "cielo claro",
    MuyNuboso = "muy nuboso",
    Nubes = "nubes",
    NubesDispersas = "nubes dispersas",
}

enum Icon {
    The01N = "01n",
    The02D = "02d",
    The03D = "03d",
    The03N = "03n",
    The04D = "04d",
    The04N = "04n",
}

enum MainEnum {
    Clear = "Clear",
    Clouds = "Clouds",
}

interface Wind {
    speed: number;
    deg:   number;
    gust:  number;
}
