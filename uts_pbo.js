class Perusahaan {
  constructor(Kuota) {
    this.Kuota = Kuota;
    this.MaksTahunan = 12;
    this.MaksSakit = 2;
    this.MaksMelahirkan = 90;
  }
}

class CutiTahunan extends Perusahaan {
  consoleLog() {
    if ((this.Kuota <= this.MaksTahunan)) {
      return `Anda berhasil mengambil cuti tahunan (${this.Kuota} hari)`;
    } else {
      return `Kuota anda tidak cukup untuk mengajukan cuti ini`;
    }
  }
}

class CutiSakit extends Perusahaan {
  consoleLog() {
    if ((this.Kuota <= this.MaksSakit)) {
      return `Anda berhasil mengambil cuti sakit (${this.Kuota} hari)`;
    } else {
      return `Kuota anda tidak cukup untuk mengajukan cuti ini`;
    }
  }
}

class CutiMelahirkan extends Perusahaan {
  consoleLog() {
    if ((this.Kuota <= this.MaksMelahirkan)) {
      return `Anda berhasil mengambil cuti melahirkan (${this.Kuota} hari)`;
    } else {
      return `Kuota anda tidak cukup untuk mengajukan cuti ini`;
    }
  }
}

const Karyawan1 = new CutiTahunan(19);
console.log(Karyawan1.consoleLog());

const Karyawan2 = new CutiSakit(5);
console.log(Karyawan2.consoleLog());

const Karyawan3 = new CutiMelahirkan(98);
console.log(Karyawan3.consoleLog());