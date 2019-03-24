class MyHomeComponent extends React.Component {
  render() {
    return (
      <Scaffold title={this.props.title}>
        <View style={styles.root}>
          <Text style={styles.text}>
            You have pushed the button this many times:
          </Text>
          <Text style={styles.text}>{this.state.counter}</Text>
          <FloatingActionButton
            onClick={this.incrementCounter}
            tooltip="Increment"
          >
            <Icon.add />
          </FloatingActionButton>
        </View>
      </Scaffold>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    //... some text styles
  },
});
