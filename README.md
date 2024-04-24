# LabSoft2-Final
Prova final de LabSoft2

para setar o ambiente foi usado wsl2 e docker para windows

git clone
npm i nas pastas front e back

comando para criar o postgress:
docker run --name labsoft_db -e POSTGRES_PASSWORD=postgres -d -p 5432:5432 postgres

apos criado, para iniciar posteriormente:
docker start patient_db

dentro do docker postgress:
psql -h localhost -U postgres

criar as tabelas:
CREATE DATABASE buy_db;
CREATE DATABASE map_db;

migrar as tabelas, comando na pasta back:
npm run typeorm:migration:run

rodar front:
npm start

rodar back npm run dev