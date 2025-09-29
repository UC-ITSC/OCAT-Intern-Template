# Install PostgreSQL

- Create a PostgreSQL Docker Container
  - Steps for Windows:
    - Download [Docker Desktop](https://www.docker.com/products/docker-desktop)
      - If you have issues, make sure you have the [May 2020 Feature Update](https://www.digitalcitizen.life/windows-10-update-assistant) or later
    - Open a terminal and run this command:

       ```bash
       docker run -p 5432:5432 --name postgres -e POSTGRES_HOST_AUTH_METHOD=trust -e PGDATA=/var/lib/postgresql/data/pgdata -e POSTGRES_DB=ocat -v pg:/var/lib/postgresql/data -e POSTGRES_PASSWORD=postgres -d postgres
       ```

    - Now run this command:

       ```bash
       cat schema.sql | docker exec -i postgres psql -U postgres -d ocat
       ```

  - Steps for Mac:
    - Download [Docker Desktop](https://www.docker.com/products/docker-desktop)
    - Open a terminal and run this command:

       ```bash
       docker run -p 5432:5432 --name postgres -e PGDATA=/var/lib/postgresql/data/pgdata -e POSTGRES_DB=ocat -v pg:/var/lib/postgresql/data -e POSTGRES_PASSWORD=postgres -d postgres
       ```

    - Now run this command:

       ```bash
       cat schema.sql | docker exec -i postgres psql -U postgres -d ocat
       ```
