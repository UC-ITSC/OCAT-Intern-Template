# Install PostgreSQL

- Create a PostgreSQL Docker Container
  - Steps for Windows:
    - Download [Docker Desktop](https://www.docker.com/products/docker-desktop)
      - If you have issues, make sure you have the [May 2020 Feature Update](https://www.digitalcitizen.life/windows-10-update-assistant) or later
    - Open a terminal and run this command:

       ```bash
       docker run -p 5432:5432 --name postgres -e PGDATA=/var/lib/postgresql/data/pgdata -v pg:/var/lib/postgresql/data -e POSTGRES_PASSWORD=password -d postgres
       ```

    - Next run this command:

       ```bash
       docker run --rm -it -v pg:/pg alpine sed -i 's/host all all all md5/host all all all trust/' /pg/pgdata/pg_hba.conf && docker restart postgres
       ```

    - And finally this command:

       ```bash
       docker exec -it postgres createdb ocat -U postgres && cat schema.sql | docker exec -i postgres psql -U postgres -d ocat
       ```

    - Next run this command:

       ```bash
       docker run --rm -it -v pg:/pg alpine sed -i 's/host all all all md5/host all all all trust/' /pg/pgdata/pg_hba.conf && docker restart postgres
       ```

  - Steps for Mac:
    - Download [Docker Desktop](https://www.docker.com/products/docker-desktop)
    - Open a terminal and run this command:

      ```bash
       docker run -p 5432:5432 --name postgres -e PGDATA=/var/lib/postgresql/data/pgdata -v pg:/var/lib/postgresql/data -e POSTGRES_PASSWORD=password -d postgres
       ```

    - Next run this command:

       ```bash
       docker exec -it postgres createdb ocat -U postgres && cat schema.sql | docker exec -i postgres psql -U postgres -d ocat
       ```
