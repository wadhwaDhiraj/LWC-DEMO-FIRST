import { LightningElement } from 'lwc';
import USER_IMAGE from '@salesforce/resourceUrl/user_image'
import APEX_LOGO from '@salesforce/resourceUrl/apex_logo'
import USER_WALKING_IMG from '@salesforce/resourceUrl/user_walking'
export default class StaticImages extends LightningElement {

    userImage = USER_IMAGE
    apexLogo = APEX_LOGO
    userWalking = USER_WALKING_IMG
}