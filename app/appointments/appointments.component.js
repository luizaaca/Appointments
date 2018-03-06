"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var appointments_service_1 = require("../service/appointments.service");
var AppointmentsComponent = /** @class */ (function () {
    function AppointmentsComponent(appointmentService) {
        this.appointmentService = appointmentService;
        this.title = 'Appointments';
    }
    AppointmentsComponent.prototype.ngOnInit = function () {
        this.getAppointments();
    };
    AppointmentsComponent.prototype.getAppointments = function () {
        var _this = this;
        this.appointmentService.getAppointments().subscribe(function (a) {
            console.log(a);
            console.log(a.length);
            console.log(a[0]);
            console.log(a[1].date instanceof Date);
            _this.appointments = a;
        });
    };
    AppointmentsComponent = __decorate([
        core_1.Component({
            selector: 'app-appointments',
            templateUrl: './appointments.component.html'
        }),
        __metadata("design:paramtypes", [appointments_service_1.AppointmentService])
    ], AppointmentsComponent);
    return AppointmentsComponent;
}());
exports.AppointmentsComponent = AppointmentsComponent;
//# sourceMappingURL=appointments.component.js.map