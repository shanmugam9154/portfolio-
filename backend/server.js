const http=require('http');
const PORT=3000;
const server=http.createServer((req,res)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers','Content-Type');
  if(req.method==='OPTIONS'){res.writeHead(204);return res.end();}
  if(req.method==='GET' && req.url==='/api/health'){res.writeHead(200,{'Content-Type':'application/json'});return res.end(JSON.stringify({status:'ok'}));}
  if(req.method==='POST' && req.url==='/api/contact'){
    let body='';req.on('data',c=>body+=c);req.on('end',()=>{
      try{const d=JSON.parse(body);
        if(!d.name||!d.email||!d.message){res.writeHead(400,{'Content-Type':'application/json'});return res.end(JSON.stringify({error:'All fields are required'}));}
        console.log('Contact message:',d);
        res.writeHead(200,{'Content-Type':'application/json'});res.end(JSON.stringify({success:true}));
      }catch(e){res.writeHead(400,{'Content-Type':'application/json'});res.end(JSON.stringify({error:'Invalid JSON'}));}
    });return;
  }
  res.writeHead(404,{'Content-Type':'application/json'});res.end(JSON.stringify({error:'Not found'}));
});
server.listen(PORT,()=>console.log('Portfolio backend: http://localhost:'+PORT));
