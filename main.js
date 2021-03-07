const myProfile = {
    data() {
        return {
            userdata: {
                firstName: 'Thanaphat',
                lastName: 'Dararat',
                age: '21',
                gender: 'male',
                email: 'naturegecko@gmail.com',
                phone: '0925465559',
                positioninplace: 'KMUTT student',
                usergeneralinfo: 'Hello! This is something I would like you to know about me! Just a little things.',
            },
            holding: {
                hodingfirstName: '',
                hodinglastName: '',
                hodingage: '',
                hodinggender: '',
                hodingemail: '',
                hodingphone: '',
                hodingpositioninplace: '',
                hodingusergeneralinfo: ''
            },
            errorNoti: {
                emptyfirstName: {
                    message: 'Please enter your first name',
                    showmessage: false
                },
                emptylastName: {
                    message: 'Please enter your last name',
                    showmessage: false
                },
                emptyage: {
                    message: 'Please enter your age',
                    showmessage: false
                },
                emptygender: {
                    message: 'Please specify your gender',
                    showmessage: false
                },
                emptyemail: {
                    message: 'Please enter your email',
                    showmessage: false
                },
                emptyphone: {
                    message: 'Please enter your phone number',
                    showmessage: false
                },
            },
            availableGenderList: [{
                genderID: 1,
                ganderName: 'male'
            }, {
                genderID: 2,
                ganderName: 'female'
            }, {
                genderID: 3,
                ganderName: 'Other'
            }],
            accountname: 'Kirah_Haitaka',
            imagehref: 'images/profile.png',
            toggleEditingModeOn: false
        }
    },
    methods: {
        toggleEditingMode() {
            this.toggleEditingModeOn = true;
            this.holding.hodingfirstName = this.userdata.firstName;
            this.holding.hodinglastName = this.userdata.lastName;
            this.holding.hodingage = this.userdata.age;
            this.holding.hodinggender = this.userdata.gender;
            this.holding.hodingemail = this.userdata.email;
            this.holding.hodingphone = this.userdata.phone;
            this.holding.hodingpositioninplace = this.userdata.positioninplace;
            this.holding.hodingusergeneralinfo = this.userdata.usergeneralinfo;
        },
        checkEditForm() {
            let errorCount = 0;
            if (!this.holding.hodingfirstName) {
                errorCount++;
                this.errorNoti.emptyfirstName.showmessage = true;
            } else {
                this.errorNoti.emptyfirstName.showmessage = false;
            }
            if (!this.holding.hodinglastName) {
                errorCount++;
                this.errorNoti.emptylastName.showmessage = true;
            } else {
                this.errorNoti.emptylastName.showmessage = false;
            }
            if (!this.holding.hodingage) {
                errorCount++;
                this.errorNoti.emptyage.showmessage = true;
            } else {
                this.errorNoti.emptyage.showmessage = false;
            }
            if (!this.holding.hodinggender) {
                errorCount++;
                this.errorNoti.emptygender.showmessage = true;
            } else {
                this.errorNoti.emptygender.showmessage = false;
            }
            if (!this.holding.hodingemail) {
                errorCount++;
                this.errorNoti.emptyemail.showmessage = true;
            } else {
                this.errorNoti.emptyemail.showmessage = false;
            }
            if (!this.holding.hodingphone) {
                errorCount++;
                this.errorNoti.emptyphone.showmessage = true;
            } else {
                this.errorNoti.emptyphone.showmessage = false;
            }
            if (errorCount == 0) {
                alert('successfully edited your account');
                this.toggleEditingModeOn = false;
                this.userdata.firstName = this.holding.hodingfirstName;
                this.userdata.lastName = this.holding.hodinglastName;
                this.userdata.age = this.holding.hodingage;
                this.userdata.gender = this.holding.hodinggender;
                this.userdata.email = this.holding.hodingemail;
                this.userdata.phone = this.holding.hodingphone;
                this.userdata.positioninplace = this.holding.hodingpositioninplace;
                this.userdata.usergeneralinfo = this.holding.hodingusergeneralinfo;
            }
        },
        clearAllHolding() {
            this.holding.hodingfirstName = '';
            this.holding.hodinglastName = '';
            this.holding.hodingage = '';
            this.holding.hodinggender = '';
            this.holding.hodingemail = '';
            this.holding.hodingphone = '';
            this.holding.hodingpositioninplace = '';
            this.holding.hodingusergeneralinfo = '';
        }
    }
}
Vue.createApp(myProfile).mount('#mainprofile')