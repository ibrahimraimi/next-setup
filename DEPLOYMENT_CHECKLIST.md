# Deployment Checklist

## Pre-Deployment

- [ ] All tests passing
- [ ] Code review completed
- [ ] Security scan passed
- [ ] Performance benchmarks acceptable
- [ ] Documentation updated
- [ ] Environment variables configured
- [ ] Database migrations tested
- [ ] Backup created

## Deployment

- [ ] Deploy to staging first
- [ ] Run smoke tests on staging
- [ ] Verify all features working
- [ ] Check monitoring and logging
- [ ] Deploy to production
- [ ] Verify production deployment
- [ ] Monitor error rates
- [ ] Check performance metrics

## Post-Deployment

- [ ] Verify all features working
- [ ] Check user reports
- [ ] Monitor system health
- [ ] Review logs for errors
- [ ] Update status page if needed
- [ ] Notify stakeholders
- [ ] Document any issues
- [ ] Plan follow-up improvements

## Rollback Plan

If issues occur:

1. Identify the problem
2. Assess impact
3. Execute rollback: \`git revert <commit>\`
4. Redeploy previous version
5. Investigate root cause
6. Fix and test thoroughly
7. Redeploy fixed version
