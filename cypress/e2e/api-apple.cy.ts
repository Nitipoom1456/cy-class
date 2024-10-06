describe('Website Apple', () => {

    const endpoint: string = 'https://www.apple.com/search-services/suggestions/defaultlinks/?src=globalnav&locale=th_TH';
  
    it('Get header apple website', () => {
      
      cy.visit('https://www.apple.com/th/');
  
      cy.request('GET', `${endpoint}`).then((response) => {
  
        expect(response.status).to.eq(200);
  
        expect(response.body.results[0].sectionResults[0]).to.have.property('label','ค้นหาร้าน');
        expect(response.body.results[0].sectionResults[0]).to.have.property('url','https://www.apple.com/th/retail/');
        expect(response.body.results[0].sectionResults[1]).to.have.property('label','อุปกรณ์เสริม');
        expect(response.body.results[0].sectionResults[1]).to.have.property('url','https://www.apple.com/th/shop/goto/accessories/apple_accessories');
        expect(response.body.results[0].sectionResults[2]).to.have.property('label','AirPods');
        expect(response.body.results[0].sectionResults[2]).to.have.property('url','https://www.apple.com/th/airpods/');
        expect(response.body.results[0].sectionResults[3]).to.have.property('label','AirTag');
        expect(response.body.results[0].sectionResults[3]).to.have.property('url','https://www.apple.com/th/airtag/');
        expect(response.body.results[0].sectionResults[4]).to.have.property('label','Apple Trade In');
        expect(response.body.results[0].sectionResults[4]).to.have.property('url','https://www.apple.com/th/shop/goto/trade_in');

  
      });
    })
  })