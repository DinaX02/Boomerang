import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector from '@mui/material/StepConnector';
import { Button } from '@mui/material';
import Check from '@mui/icons-material/Check';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  '.MuiStepConnector-line': {
    borderColor: '#bdbdbd',
  },
}));

const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  display: 'flex',
  height: 22,
  alignItems: 'center',
}));

const QontoStepIconCircle = styled('div')(({ theme, ownerState }) => ({
  width: 18,
  height: 18,
  borderRadius: '50%',
  backgroundColor: ownerState.completed ? '#4caf50' : '#bdbdbd',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
}));

const QontoStepIconCompleted = styled(Check)(({ theme, ownerState }) => ({
  color: '#fff',
  fontSize: "1em"
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      <QontoStepIconCircle ownerState={{ completed, active }}>
        {completed && <QontoStepIconCompleted ownerState={{ active }} />}
      </QontoStepIconCircle>
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  completed: PropTypes.bool,
};

const CustomStepper = styled(Stepper)(({ theme }) => ({
  '.MuiStepLabel-label': {
    color: '#bdbdbd',
  },
}));

export default function CustomizedSteppers({ activeStep, onStepChange }) {
  const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];
  const [completedSteps, setCompletedSteps] = React.useState([]);

  const handleNext = () => {
    setCompletedSteps((prevCompletedSteps) => {
      const updatedCompletedSteps = [...prevCompletedSteps, activeStep];
      onStepChange((prevStep) => Math.min(prevStep + 1, steps.length - 1));
      return updatedCompletedSteps;
    });
  };

  const handleBack = () => {
    setCompletedSteps((prevCompletedSteps) => {
      const updatedCompletedSteps = prevCompletedSteps.filter((step) => step !== activeStep);
      return updatedCompletedSteps;
    });

    onStepChange((prevStep) => Math.max(prevStep - 1, 0));
  };

  return (
    <Stack sx={{ width: '100%' }} spacing={4}>
      <CustomStepper activeStep={activeStep} connector={<QontoConnector />}>
        {steps.map((label, index) => (
          <Step key={label} completed={completedSteps.includes(index)}>
            <StepLabel StepIconComponent={QontoStepIcon}></StepLabel>
          </Step>
        ))}
      </CustomStepper>
      <Stack direction="row" justifyContent="flex-end" spacing={2}>
        <Button onClick={handleBack} disabled={activeStep === 0}>
          Anterior
        </Button>
        <Button onClick={handleNext} disabled={activeStep === steps.length - 1}>
          Próximo
        </Button>
      </Stack>
    </Stack>
  );
}

CustomizedSteppers.propTypes = {
  activeStep: PropTypes.number.isRequired,
  onStepChange: PropTypes.func.isRequired,
};