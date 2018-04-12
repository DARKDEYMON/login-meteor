
FlowRouter.route('/singup/',{
    name:'singup',
    action(){
        BlazeLayout.render("singmodal");
    }
});

FlowRouter.route('/',{
    name:'hello',
    action(){
        BlazeLayout.render("main");
    }
});


const adm = FlowRouter.group({
    prefix:'/datos',
    triggersEnter: [
    	(context, redirect)=>{
    		if(Meteor.user()===null){
    			console.log("aqui");
    			redirect('/');
    		}
    	}
    ]
});


adm.route('/datoslog',{
    name:'datoslogeado',
    action(){
        BlazeLayout.render("datoslogeado");
    }
});