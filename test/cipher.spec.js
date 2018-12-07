describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offest 33',()=>
{    assert.equal(cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ",33),"HIJKLMNOPQRSTUVWXYZABCDEFG");
  }
    );
     
    it('deberia retornar " " para " " con offset 10',()=>{
     assert.equal(cipher.encode(" ",10)," ");
   }
     );

    it('deberia retornar "!#$%&()*+;-.:<>?@[]_{}|~" para "!#$%&()*+;-.:<>?@[]_{}|~" con offset 10',()=>{
    assert.equal(cipher.encode("!#$%&()*+;-.:<>?@[]_{}|~",10),"!#$%&()*+;-.:<>?@[]_{}|~");
    }
    );

    it('deberia retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "abcdefghijklmnopqrstuvwxyz" con offset 0',()=>{
    assert.equal(cipher.encode("abcdefghijklmnopqrstuvwxyz",0),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    );

    it('debería retornar "1234567890" para "0123456789" con offset 1',()=>{
    assert.equal(cipher.encode("0123456789",1),"1234567890");
    }
    );



  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });


    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offest 33',()=>{    
      assert.equal(cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG",33),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
    );

    it('deberia retornar " " para " " con offset 10',()=>{
      assert.equal(cipher.decode(" ",10)," ");
    }
      );
 
     it('deberia retornar "!#$%&()*+;-.:<>?@[]_{}|~" para "!#$%&()*+;-.:<>?@[]_{}|~" con offset 10',()=>{
     assert.equal(cipher.decode("!#$%&()*+;-.:<>?@[]_{}|~",10),"!#$%&()*+;-.:<>?@[]_{}|~");
     }
     );
 
     it('deberia retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "abcdefghijklmnopqrstuvwxyz" con offset 0',()=>{
     assert.equal(cipher.decode("abcdefghijklmnopqrstuvwxyz",0),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
     }
     );
 
     it('debería retornar "0123456789" para "1234567890" con offset 1',()=>{
     assert.equal(cipher.decode("1234567890",1),"0123456789");
     }
     );

  });


});
