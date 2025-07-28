const veiculos = [
    {
      nome: "Fiat Uno",
      ano: 2020,
      preco: 45000,
      modelo: "Way 1.3",
      combustivel: "Flex"
    },
    {
      nome: "Volkswagen Gol",
      ano: 2022,
      preco: 65000,
      modelo: "Trendline 1.0",
      combustivel: "Flex"
    },
    {
      nome: "Chevrolet Onix",
      ano: 2023,
      preco: 85000,
      modelo: "LTZ 1.0 Turbo",
      combustivel: "Flex"
    },
    {
      nome: "Ford Ranger",
      ano: 2021,
      preco: 220000,
      modelo: "XLT 3.2",
      combustivel: "Diesel"
    },
    {
      nome: "Toyota Corolla",
      ano: 2022,
      preco: 150000,
      modelo: "Altis Hybrid",
      combustivel: "Híbrido"
    },
    {
      nome: "Honda Civic",
      ano: 2023,
      preco: 160000,
      modelo: "Touring 1.5 Turbo",
      combustivel: "Gasolina"
    },
    {
      nome: "Jeep Compass",
      ano: 2021,
      preco: 140000,
      modelo: "Limited 4x4",
      combustivel: "Flex"
    },
    {
      nome: "Hyundai HB20",
      ano: 2020,
      preco: 55000,
      modelo: "S Platinum 1.0",
      combustivel: "Flex"
    },
    {
      nome: "Renault Kwid",
      ano: 2022,
      preco: 50000,
      modelo: "Zen 1.0",
      combustivel: "Flex"
    },
    {
      nome: "Fusca",
      ano: 1950,
      preco: 10000,
      modelo: "Wolkswagem",
      combustivel: "Gasolina"
    }
  ];

  let veiculosSeminovos = veiculos.filter(veiculo => veiculo.ano >= 2000 && veiculo.ano >= 2022);
  console.log("Veículos seminovos");
  console.log(veiculosSeminovos);

  let veiculosNovos = veiculos.filter(veiculo => veiculo.ano >= 2023);
  console.log("Veículos novos.");
  console.log(veiculosNovos);

  let veiculosClassicos = veiculos.filter(veiculo => veiculo.ano < 2000);
  console.log("Veículos classícos.");
  console.log(veiculosClassicos);

  let veiculoGasolina = veiculos.filter(veiculo => veiculo.combustivel == "Gasolina");
  console.log("Movidos a gasolina");
  console.log(veiculoGasolina);

  let veiculoBaixoCusto = veiculos.filter(veiculo => veiculo.preco <= 10000)
  console.log("Baixo custo (<=10k)");
  console.log(veiculoBaixoCusto);
