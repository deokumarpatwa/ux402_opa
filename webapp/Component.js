sap.ui.define([
    "sap/ui/core/UIComponent",
    "student18/com/sap/training/ux402/opa/ux402opa/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("student18.com.sap.training.ux402.opa.ux402opa.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();
        }
    });
});