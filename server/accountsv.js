

AccountsTemplates.configure({
	postSignUpHook : function (userId, info) {
		console.log(userId+" " +info);
		Roles.addUsersToRoles(userId,['normal-user']);
	}
});
