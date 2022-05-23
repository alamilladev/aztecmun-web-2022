<template>
  <section class="signup background flex">
    <div class="signup-container">
      <div class="signup-container-head">
        <ButtonsArrowBack class-name="signup-arrow" :on-click="goToPrevStep" />
        <LogoAztecmun class-name="signup-logo" />
      </div>

      <div v-if="signupDisable" class="signup-form-container">
        <div class="form-element active">
          <h1 class="primary">La convocatoria ha terminado :(</h1>
          <p>¡Esperamos verte en la siguiente edición!</p>
        </div>
      </div>
      <form v-else class="signup-form-container" @submit.prevent="goToNextStep">
        <div
          :class="['form-element', slideAnimationClass, setStepStatusClass(1)]"
        >
          <label for="age">Nombre completo:</label>
          <input
            id="name"
            v-model="volunteerData.name"
            name="name"
            type="text"
            placeholder="Nombre completo"
            required
            autofocus
            class="form-input"
            @input="setValidationErrorMessage(null)"
          />
        </div>
        <div
          :class="['form-element', slideAnimationClass, setStepStatusClass(2)]"
        >
          <label for="age">Edad:</label>
          <input
            id="age"
            v-model="volunteerData.age"
            name="age"
            type="number"
            placeholder="18"
            required
            autofocus
            class="form-input"
            @input="setValidationErrorMessage(null)"
          />
        </div>
        <div
          :class="['form-element', slideAnimationClass, setStepStatusClass(3)]"
        >
          <label for="state">Estado:</label>
          <select
            id="state"
            v-model="volunteerData.state"
            required
            name="state"
            class="form-input"
            @input="setValidationErrorMessage(null)"
          >
            <option disabled selected>Selecciona una opción</option>
            <option value="Ciudad de México">Ciudad de México</option>
            <option value="Estado de México">Estado de México</option>
            <option value="Hidalgo">Hidalgo</option>
            <option value="Puebla">Puebla</option>
            <option value="Guanajuato">Guanajuato</option>
            <option value="Aguascalientes">Aguascalientes</option>
            <option value="Baja California">Baja California</option>
            <option value="Baja California Sur">Baja California Sur</option>
            <option value="Campeche">Campeche</option>
            <option value="Chiapas">Chiapas</option>
            <option value="Chihuahua">Chihuahua</option>
            <option value="Coahuila">Coahuila</option>
            <option value="Colima">Colima</option>
            <option value="Durango">Durango</option>
            <option value="Guerrero">Guerrero</option>
            <option value="Jalisco">Jalisco</option>
            <option value="Michoacán">Michoacán</option>
            <option value="Morelos">Morelos</option>
            <option value="Nayarit">Nayarit</option>
            <option value="Nuevo León">Nuevo León</option>
            <option value="Oaxaca">Oaxaca</option>
            <option value="Querétaro">Querétaro</option>
            <option value="Quintana Roo">Quintana Roo</option>
            <option value="San Luis Potosí">San Luis Potosí</option>
            <option value="Sinaloa">Sinaloa</option>
            <option value="Sonora">Sonora</option>
            <option value="Tabasco">Tabasco</option>
            <option value="Tamaulipas">Tamaulipas</option>
            <option value="Tlaxcala">Tlaxcala</option>
            <option value="Veracruz">Veracruz</option>
            <option value="Yucatán">Yucatán</option>
            <option value="Zacatecas">Zacatecas</option>
          </select>
        </div>
        <div
          :class="['form-element', slideAnimationClass, setStepStatusClass(4)]"
        >
          <label for="school">Escuela de procedencia:</label>
          <input
            id="school"
            v-model="volunteerData.school"
            name="school"
            type="text"
            placeholder="Plantel Azteca CDMX"
            required
            autofocus
            class="form-input"
            @input="setValidationErrorMessage(null)"
          />
        </div>
        <div
          :class="['form-element', slideAnimationClass, setStepStatusClass(5)]"
        >
          <label for="group">Grupo:</label>
          <input
            id="group"
            v-model="volunteerData.group"
            name="group"
            type="text"
            placeholder="411"
            required
            autofocus
            class="form-input"
            @input="setValidationErrorMessage(null)"
          />
        </div>
        <div
          :class="['form-element', slideAnimationClass, setStepStatusClass(6)]"
        >
          <label for="shift">Turno:</label>
          <select
            id="shift"
            v-model="volunteerData.shift"
            required
            name="shift"
            class="form-input"
            @input="setValidationErrorMessage(null)"
          >
            <option disabled selected>Selecciona una opción</option>
            <option value="Matutino">Matutino</option>
            <option value="Vespertino">Vespertino</option>
          </select>
        </div>
        <div
          :class="['form-element', slideAnimationClass, setStepStatusClass(7)]"
        >
          <label for="email">Correo electronico:</label>
          <input
            id="email"
            v-model="volunteerData.email"
            name="email"
            type="email"
            placeholder="name@example.com"
            required
            autofocus
            class="form-input"
            @input="setValidationErrorMessage(null)"
          />
        </div>
        <div
          :class="['form-element', slideAnimationClass, setStepStatusClass(8)]"
        >
          <label for="password">Contraseña:</label>
          <input
            id="password"
            v-model="volunteerData.password"
            name="password"
            type="password"
            required
            autofocus
            class="form-input"
            @input="setValidationErrorMessage(null)"
          />
        </div>
        <div
          :class="['form-element', slideAnimationClass, setStepStatusClass(9)]"
        >
          <label for="phone">Teléfono:</label>
          <input
            id="phone"
            v-model="volunteerData.phone"
            name="phone"
            type="tel"
            placeholder="5564927362"
            required
            autofocus
            class="form-input"
            @input="setValidationErrorMessage(null)"
          />
        </div>
        <div
          :class="['form-element', slideAnimationClass, setStepStatusClass(10)]"
        >
          <label for="role">Rol a desempeñar:</label>
          <select
            id="role"
            v-model="volunteerData.role"
            required
            name="role"
            class="form-input"
            @input="setValidationErrorMessage(null)"
          >
            <option disabled selected>Selecciona una opción</option>
            <option value="Paje">Paje</option>
            <option value="Auxiliar">Auxiliar (edecan)</option>
          </select>
        </div>
        <div
          :class="['form-element', slideAnimationClass, setStepStatusClass(11)]"
        >
          <template v-if="signupError === false">
            <h1 class="success-title">¡Registro completado!</h1>
            <p>Espera más novedades pronto.</p>
          </template>
          <template v-else-if="signupError === true">
            <h1 class="error-title">Ha ocurrido un error</h1>
            <p>
              Intentalo más tarde. <br />
              Si el error persiste, contáctanos.
            </p>
          </template>
        </div>
        <p v-if="validationErrorMesage" class="validation-error">
          {{ validationErrorMesage }}
        </p>
        <ButtonsFormBtn
          class-name="signup-btn"
          type="fill"
          color="primary"
          size="medium"
          label="Siguiente"
          :on-click="goToNextStep"
        />
      </form>
    </div>
  </section>
</template>

<script>
import Volunteer from '@@/src/app/modules/volunteer';

export default {
  name: 'SignupPage',
  layout: 'default',
  data() {
    return {
      fomType: 'volunteers',
      signupDisable: false,
      slideAnimationClass: 'slide-in-right',
      signupError: false,
      validationErrorMesage: null,
      stepId: {
        current: 1,
        minLimit: 0,
        maxLimit: 11,
      },
      volunteerData: {
        name: '',
        age: '',
        state: 'Selecciona una opción',
        school: '',
        group: '',
        shift: 'Selecciona una opción',
        email: '',
        password: '',
        phone: '',
        role: 'Selecciona una opción',
      },
    };
  },
  head: {
    title: 'AztecMUN 2022 | SignUp',
  },
  methods: {
    setStepStatusClass(stepId) {
      if (stepId === this.stepId.current) {
        return 'active';
      } else {
        return 'inactive';
      }
    },
    setValidationErrorMessage(message) {
      this.validationErrorMesage = message;
    },
    async validateInputData(stepId) {
      const formLength = Object.keys(this.volunteerData).length;

      for (let i = 1; i <= formLength; i++) {
        if (i === stepId) {
          const id = Object.keys(this.volunteerData)[stepId - 1];

          if (
            this.volunteerData[id] &&
            this.volunteerData[id] !== '' &&
            this.volunteerData[id] !== 'Selecciona una opción'
          ) {
            if (id === 'email') {
              const volunteer = new Volunteer();
              return await volunteer.getStatus(this.volunteerData.email);
            } else {
              this.setValidationErrorMessage(null);
            }
          } else {
            this.setValidationErrorMessage('Este campo es obligatorio');
          }
        }
      }
    },
    goToNextStep() {
      this.validateInputData(this.stepId.current).then((status) => {
        if (status === 'ALREADY_EXIST') {
          this.setValidationErrorMessage('Ese email ya ha sido registrado');
        }

        if (!this.validationErrorMesage) {
          this.slideAnimationClass = 'slide-in-right';
          this.stepId.current += 1;

          if (this.stepId.current === this.stepId.maxLimit) {
            this.submitForm(this.fomType);
          } else if (this.stepId.current > this.stepId.maxLimit) {
            this.$router.push('/');
          }
        }
      });
    },
    goToPrevStep() {
      this.setValidationErrorMessage(null);
      this.slideAnimationClass = 'slide-in-left';
      this.stepId.current -= 1;

      if (
        this.stepId.current === this.stepId.minLimit ||
        this.stepId.current === this.stepId.maxLimit - 1
      ) {
        this.$router.push('/');
      }
    },
    submitForm() {
      const volunteer = new Volunteer();
      volunteer
        .signup(this.volunteerData)
        .then(() => {
          this.signupError = false;
        })
        .catch(() => {
          this.signupError = true;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/pages/signup';
</style>
