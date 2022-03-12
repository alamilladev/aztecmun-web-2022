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
            name="age"
            type="number"
            placeholder="18"
            required
            class="form-input"
          />
        </div>
        <div
          :class="['form-element', slideAnimationClass, setStepStatusClass(2)]"
        >
          <label for="state">Estado:</label>
          <input
            id="state"
            name="state"
            type="text"
            placeholder="Ciudad de México"
            required
            class="form-input"
          />
        </div>
        <div
          :class="['form-element', slideAnimationClass, setStepStatusClass(3)]"
        >
          <label for="school">Escuela de procedencia:</label>
          <input
            id="school"
            name="school"
            type="text"
            placeholder="Plantel Azteca CDMX"
            required
            class="form-input"
          />
        </div>
        <div
          :class="['form-element', slideAnimationClass, setStepStatusClass(4)]"
        >
          <label for="education">Nivel de estudios:</label>
          <select id="education" name="education" class="form-input">
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
            name="email"
            type="email"
            placeholder="name@example.com"
            required
            class="form-input"
          />
        </div>
        <div
          :class="['form-element', slideAnimationClass, setStepStatusClass(6)]"
        >
          <label for="phone">Teléfono:</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="5564927362"
            required
            class="form-input"
          />
        </div>
        <div
          :class="['form-element', slideAnimationClass, setStepStatusClass(7)]"
        >
          <label for="committee">Comité:</label>
          <select id="committee" name="committee" class="form-input">
            <option value="CIDH">CIDH</option>
            <option value="CIB">CIB</option>
            <option value="UNICEF">UNICEF</option>
            <option value="UNSC">UNSC</option>
          </select>
        </div>
        <div
          :class="['form-element', slideAnimationClass, setStepStatusClass(8)]"
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
      stepId: {
        current: 1,
        minLimit: 0,
        maxLimit: 8,
      },
      userForm: {
        age: '',
        state: '',
        school: '',
        education: '',
        email: '',
        phone: '',
        committee: '',
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
    goToNextStep() {
      this.slideAnimationClass = 'slide-in-right';
      this.stepId.current += 1;

      if (this.stepId.current === this.stepId.maxLimit) {
        this.submitForm();
      } else if (this.stepId.current > this.stepId.maxLimit) {
        this.$router.push('/');
      }
    },
    goToPrevStep() {
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
        .signup(this.userForm)
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
