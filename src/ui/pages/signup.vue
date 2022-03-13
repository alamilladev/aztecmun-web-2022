<template>
  <section class="signup background">
    <div class="signup-container">
      <div class="signup-container-head">
        <ButtonsArrowBack class-name="signup-arrow" :on-click="goToPrevStep" />
        <LogoAztecmun class-name="signup-logo" />
      </div>
      <form class="signup-form" @submit.prevent="goToNextStep">
        <div
          :class="['form-element', slideAnimationClass, setStepStatusClass(1)]"
        >
          <label for="age">Edad:</label>
          <input
            id="age"
            v-model="userData.age"
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
          :class="['form-element', slideAnimationClass, setStepStatusClass(2)]"
        >
          <label for="state">Estado:</label>
          <select
            id="state"
            v-model="userData.state"
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
          :class="['form-element', slideAnimationClass, setStepStatusClass(3)]"
        >
          <label for="school">Escuela de procedencia:</label>
          <input
            id="school"
            v-model="userData.school"
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
          :class="['form-element', slideAnimationClass, setStepStatusClass(4)]"
        >
          <label for="education">Nivel de estudios:</label>
          <select
            id="education"
            v-model="userData.education"
            required
            name="education"
            class="form-input"
            @input="setValidationErrorMessage(null)"
          >
            <option disabled selected>Selecciona una opción</option>
            <option value="secundaria">secundaria</option>
            <option value="preparatoria">preparatoria</option>
            <option value="universidad">universidad</option>
            <option value="otro">otro</option>
          </select>
        </div>
        <div
          :class="['form-element', slideAnimationClass, setStepStatusClass(5)]"
        >
          <label for="email">Correo electronico:</label>
          <input
            id="email"
            v-model="userData.email"
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
          :class="['form-element', slideAnimationClass, setStepStatusClass(6)]"
        >
          <label for="password">Contraseña:</label>
          <input
            id="password"
            v-model="userData.password"
            name="password"
            type="password"
            required
            autofocus
            class="form-input"
            @input="setValidationErrorMessage(null)"
          />
        </div>
        <div
          :class="['form-element', slideAnimationClass, setStepStatusClass(7)]"
        >
          <label for="phone">Teléfono:</label>
          <input
            id="phone"
            v-model="userData.phone"
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
          :class="['form-element', slideAnimationClass, setStepStatusClass(8)]"
        >
          <label for="committee">Comité:</label>
          <select
            id="committee"
            v-model="userData.committee"
            required
            name="committee"
            class="form-input"
            @input="setValidationErrorMessage(null)"
          >
            <option disabled selected>Selecciona una opción</option>
            <option value="CIDH">CIDH</option>
            <option value="CIB">CIB</option>
            <option value="UNICEF">UNICEF</option>
            <option value="UNSC">UNSC</option>
          </select>
        </div>
        <div
          :class="['form-element', slideAnimationClass, setStepStatusClass(9)]"
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
import { User } from '@@/src/app/modules/user';

export default {
  name: 'SignupPage',
  layout: 'default',
  data() {
    return {
      slideAnimationClass: 'slide-in-right',
      signupError: false,
      validationErrorMesage: null,
      stepId: {
        current: 1,
        minLimit: 0,
        maxLimit: 9,
      },
      userData: {
        age: '',
        state: 'Selecciona una opción',
        school: '',
        education: 'Selecciona una opción',
        email: '',
        password: '',
        phone: '',
        committee: 'Selecciona una opción',
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
      const formLength = Object.keys(this.userData).length;

      for (let i = 1; i <= formLength; i++) {
        if (i === stepId) {
          const id = Object.keys(this.userData)[stepId - 1];

          if (
            this.userData[id] &&
            this.userData[id] !== '' &&
            this.userData[id] !== 'Selecciona una opción'
          ) {
            if (id === 'email') {
              const user = new User();
              return await user.getStatus(this.userData.email);
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
            this.submitForm();
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
      const user = new User();
      user
        .signup(this.userData)
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
