<Box key={key}>
  <Route
    path={route.path}
    children={({ match }) => (
      <Box className={classes.menuItem}>
        {/* <Button style={{ textDecoration: 'none' }}>
                    <Box>
                      <Icon className={classes.menuText}>{route.icon}</Icon>
                    </Box>
                    <Box>
                      <Typography variant="baody1" className={classes.menuText}>
                        {route.name}
                      </Typography>
                    </Box>
                  </Button> */}
        <Link style={{ textDecoration: 'none' }} to={route.path}>
          <Box>
            <Icon className={classes.menuText}>{route.icon}</Icon>
          </Box>
          <Box>
            <Typography variant="body1" className={classes.menuText}>
              {route.name}
            </Typography>
          </Box>
        </Link>
      </Box>
    )}
  />
</Box>;
