{
  // interface - generic

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<EmilabWatch> = {
    name: "Ashik",
    computer: {
      brand: "asus",
      model: "X-255UR",
      releseYear: 2013,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw99",
      display: "OLED",
    },
  };

  interface SamsungWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }
  interface YamahaBike {
    model: string;
    engineCapacity: string;
  }
  const richDeveloper: Developer<SamsungWatch, YamahaBike> = {
    name: "Atul",
    computer: {
      brand: "HP",
      model: "A-255",
      releseYear: 2013,
    },
    smartWatch: {
      brand: "Samsung",
      model: "g5",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamaha",
      engineCapacity: "150cc",
    },
  };

  //
}
