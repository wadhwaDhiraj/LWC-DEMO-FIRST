import { LightningElement, api } from 'lwc';

export default class LwcConfigDemo extends LightningElement {
    @api heading
    @api age
    @api recordId
    @api levels
}