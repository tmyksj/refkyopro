# AtCoder Beginner Contest 027
## A - 長方形
```cpp
#include <iostream>

using namespace std;

int main() {
    int l1, l2, l3;
    cin >> l1 >> l2 >> l3;
    cout << (l1 == l2 ? l3 : (l1 == l3 ? l2 : l1)) << endl;
}
```
