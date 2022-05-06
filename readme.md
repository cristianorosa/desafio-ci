Rodar scanner em docker para sonarqube local
- docker run --rm --network sonarqube_sonarnet -v ${PWD}/src:/usr/src -v ${PWD}/coverage-ext:/usr/src/coverage-ext sonarsource/sonar-scanner-cli

Rodar testes do projeto
- npm run test