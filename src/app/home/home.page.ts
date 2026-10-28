import { Component, OnInit, inject } from '@angular/core'; // Agrega 'OnInit'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Especialista, EstadoEspecialista } from '../models/user.model';
import {
  IonGrid,
  IonRow,
  IonCol,
  IonSearchbar,
  IonAvatar,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonToggle,
  IonCheckbox,
  IonButton,
  IonButtons,
  IonIcon,
  IonBadge,
  IonModal
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  phonePortraitOutline,
  createOutline,
  documentTextOutline,
  paperPlaneOutline,
  closeCircleOutline
} from 'ionicons/icons';
import { BookingRequest, AVAILABLE_SERVICES, ServiceCategory } from '../models/booking-request.model';
import { FeedbackService } from '../services/feedback.service';
import { ApiService } from '../services/api.service'; // Importa tu servicio de API

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonGrid,
    IonRow,
    IonCol,
    IonSearchbar,
    IonAvatar,
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonToggle,
    IonCheckbox,
    IonButton,
    IonButtons,
    IonIcon,
    IonBadge,
    IonModal
  ]
})
export class HomePage implements OnInit { // Implementa 'implements OnInit'
private readonly feedbackService = inject(FeedbackService);
private readonly api = inject(ApiService);
private readonly toastCtrl = inject(ToastController);


  readonly services: ServiceCategory[] = AVAILABLE_SERVICES;

  // Crea una variable para guardar los datos que traiga la API
  private especialistas: Especialista[] = [];  
  filtrados: Especialista[] = [];
  cargando = true;
  error = false;
  postsFromApi: any[] = [];

  formData: BookingRequest = {
    fullName: '',
    serviceType: '',
    smsNotifications: true,
    acceptTerms: false
  };

  isTermsModalOpen: boolean = false;

  constructor() {
    addIcons({
      phonePortraitOutline,
      createOutline,
      documentTextOutline,
      paperPlaneOutline,
      closeCircleOutline
    });
  }

  // método ngOnInit para llamar a la API automáticamente al abrir la app
  ngOnInit() {
  }

  setTermsModalOpen(isOpen: boolean): void {
    this.isTermsModalOpen = isOpen;
  }

  async enviarSolicitud(): Promise<void> {
    // ... (tu código de enviar solicitud se queda igual)
  }
}
