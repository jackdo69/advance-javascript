/* eslint-disable import/no-extraneous-dependencies */
import chai from 'chai';
import chaiHttp from 'chai-http';
import chaiThings from 'chai-things';
import server from '../src/app';

chai.use(chaiHttp);
chai.use(chaiThings);
// eslint-disable-next-line no-unused-vars
const should = chai.should();

describe('Users', () => {
  /*
   * Test the /GET route
   */
  describe('/GET users', () => {
    it('it should GET all the users', (done) => {
      chai
        .request(server)
        .get('/user')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(2);
          done();
        });
    });
  });
});
