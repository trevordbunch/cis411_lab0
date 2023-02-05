const chai = require('chai');
const expect = chai.expect;
const express = require('express');
const request = require('supertest');
const express_graphql = require('express-graphql');
const { buildSchema } = require('graphql');
const { 
  loadOrder,
  queryOrders, 
  upsertOrder, 
  loadAccount, 
  upsertAccount, 
  deleteAccount, 
  queryAccounts 
} = require('./dbutil');

describe('GraphQL server', () => {
  let app;

  beforeEach(() => {
    app = express();
    app.use(
      '/graphql',
      express_graphql({
        schema: schema,
        rootValue: root,
        graphiql: false,
        formatError: error => ({
          message: error.message,
          locations: error.locations,
          stack: error.stack ? error.stack.split('\n') : [],
          path: error.path,
        }),
      })
    );
  });

  it('returns order by id', async () => {
    const response = await request(app)
      .post('/graphql')
      .send({
        query: `
          query {
            order(id: "1") {
              id
              request_date
              location
            }
          }
        `,
      });

    expect(response.statusCode).to.equal(200);
    expect(response.body.data.order).to.deep.equal({
      id: "1",
      request_date: "2020-01-01T00:00:00.000Z",
      location: "location 1",
    });
  });

  it('returns a list of accounts', async () => {
    const response = await request(app)
      .post('/graphql')
      .send({
        query: `
          query {
            listAccounts {
              id
              email
              cell
              name
            }
          }
        `,
      });

    expect(response.statusCode).to.equal(200);
    expect(response.body.data.listAccounts).to.deep.equal([
      {
        id: "1",
        email: "email1@example.com",
        cell: "cell1",
        name: "name1",
      },
      {
        id: "2",
        email: "email2@example.com",
        cell: "cell2",
        name: "name2",
      },
    ]);
  });

  it('upserts an account', async () => {
    const response = await request(app)
      .post('/graphql')
      .send({
        query: `
          mutation {
            mutateAccount(input: {
              id: "3",
              email: "email3@example.com",
              cell: "cell3",
              name: "name3",
              mutation: "create"
            }) {
              id
              email
              cell
              name
            }
          }
        `,
      });
    });
});